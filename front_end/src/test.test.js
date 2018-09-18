
//GET TEST TO localhost:4000/api/messages
pm.test('status is ok', () => {
    const response = pm.response.json()
    pm.expect(response).to.be.ok
})

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

//POST TEST TO localhost:4000/api/createUser
pm.test('status is ok', () => {
    const response = pm.response.json()
    pm.expect(response).to.be.ok
})

