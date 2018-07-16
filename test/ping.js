const server = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('/GET ping', () => {
    it('expect response status to be ok', (done) => {
        chai.request(server)
            .get('/api/ping')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });

    it('expect body to contain version', (done) => {
        chai.request(server)
            .get('/api/ping')
            .end((err, res) => {
                expect(res.body).to.be.a('object');
                expect(res.body).to.have.property('version');
                done();
            });
    });

    it('expect default version to be 1', (done) => {
        chai.request(server)
            .get('/api/ping')
            .end((err, res) => {
                expect(res.body.version).to.equal('1.0.0');
                done();
            });
    });

    it('expect version as accepted by client', (done) => {
        chai.request(server)
            .get('/api/ping')
            .set('Accept-Version', '~0')
            .end((err, res) => {
                expect(res.body.version).to.equal('0.0.1');
                done();
            });
    });
});
