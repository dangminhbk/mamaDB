describe('mamaDB',()=>{
    let db = null;
    beforeEach(() => {
        db = new mamaDB();
    });
    describe('after initization',()=>{
        it('should return an error after getItem(anykey)', ()=>{
            expect(db.getItem("key").message).to.equal("Unable to get item");
        });
        it('should return an error after getItem(anykey) with anykey is not string',()=>{
            expect(db.getItem(1).message).to.equal("Key is not a string");
        })
    })
    describe('Test putItem function',()=>{
        it('should return an err if "key" is not string')
        it('should return an err if "key" is null')
        it('should return an err if "file" is not string')
        it('should return an err if "file" is null')
    })
});
