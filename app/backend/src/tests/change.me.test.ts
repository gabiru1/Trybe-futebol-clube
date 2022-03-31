import * as bcryptjs from 'bcryptjs';
import * as chai from 'chai';
import * as sinon from 'sinon';
import { Response } from 'superagent';
import { app } from '../app';
import Users from '../database/models/Users';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const validUser = {
  id: 1,
  username: "Admin",
  role: "admin",
  password: "secret_admin",
  email: "admin@admin.com",
};

describe('Test /login (POST)', () => {
  let res: Response;
  let req;

  describe('Testa se é possível fazer uma requisição com usuário válido', () => {
    before(async () => {
      sinon.stub(Users, "findOne").resolves(validUser as Users);
      sinon.stub(bcryptjs, "compareSync").returns(true);
    })

    after(async () => {
      (Users.findOne as sinon.SinonStub).restore();
      (bcryptjs.compareSync as sinon.SinonStub).restore();
    })

    it('Verifica se o usuário é válido', async () => {
      req = { email: "admin@admin.com", password: "secret_admin" };
      res = await chai.request(app).post('/login').send(req);

      console.log(res);
      
      const { user, token } = res.body;

      console.log(user);

      expect(user.id).to.be.equal(1);
      expect(user.username).to.be.equal("Admin");
      expect(user.role).to.be.equal("admin");
      expect(user.email).to.be.equal("admin@admin.com");
      expect(token).to.be.contains("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ");
      expect(res.status).to.be.equal(200);
    });
  });
});
