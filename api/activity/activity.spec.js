const app = require('../../app');

const expect = require('chai').expect;

const request = require('supertest');

const mailboxDao = require('../../dao/mailbox/');

const circleDao = require('../../dao/circle/');

const followDAO = require('../../dao/follow');

const activityDao = require('../../dao/activity');

// CHANGEME: Describe test cases for "publish to circle" and "publish to mailbox"
describe('/publish to circle and mailbox', () => {
  // TODO: Pre assertion should be put inside before block
  let id;
  let circleId;
  let mailboxId;
  let newactivity;

  before(() => {
    circleId = circleDao.createCircle().id;
    mailboxId = mailboxDao.createMailbox().id;
    newactivity = {
      payload: {
        link: 'www.google.com',
        image: 'image.jpg',
      },
      receiver: circleId,
    };
  });

  it('should publish an activity to a circle and its mailboxid', (done) => {
    // TODO: Pre-action should always be present
    expect(mailboxDao.checkIfMailboxExists(circleId)).to.equal(true);
    expect(circleDao.checkIfCircleExists(circleId)).to.equal(true);
    // TODO: Assert that mailbox has no activities


    request(app)
      .post(`/circle/${circleId}/activity`) // CHANGEME: URI from /publish/circle/:cid/activity --> /circle/:cid/activity
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) { done(err); return; }
        expect(res.body).to.have.property('payload');
        // expect(followDAO.checkIfFollowExists({ circleId, mailboxId }).to.equal(true));
        // expect(26).to.equal(26);
        // console.log(`publish${circleId}`);
        expect(activityDao.createPublishActivity((newactivity).payload)).not.to.be.empty;
        expect(activityDao.checkIfActivityPublished(circleId)).to.equal(true);
        done();
      });
  });
});