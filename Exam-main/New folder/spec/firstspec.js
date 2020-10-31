describe('To test the customer Details', () => {
    let cust = null;
    it('should check name is of valid format', () => {
        const cust = new customer("Shandhiya", "xyz@gmail.com" , "31-10-2020","1234567890","745");
        expect(cust.name).toMatch("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");        
        
    });
 
    it('should check whether name has min 5 characters', () => {
        const cust = new customer("ABCDE", "xyz@gmail.com" , "31-10-2020","1234567890","854");
        expect(cust.name.length).toBe(5);
        
    });
    it('should check for valid name',()=>
    {
        const cust = new customer("ABCDE", "xyz@gmail.com" , "31-10-2020","1234567890","100");
        expect(cust.phone.length).toBe(10);
    })
    it('should check for valid Email',()=>
    {
        const cust = new customer("ABCDE", "xyz@gmail.com" , "31-10-2020","1234567890","600");
        expect(cust.email).toMatch("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
    })
    it('should check for valid BillAmount',()=>
    {
        const cust = new customer("ABCDE", "xyz@gmail.com" , "31-10-2020","1234567890","500");
        expect(cust.billAmount).toMatch("[0-500]");
    })
    
    
});