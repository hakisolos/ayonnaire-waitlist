import { Hono } from "hono";
import { cors } from "hono/cors";
import { isValidEmail } from "./src/models/utils";
import Conndb from "./src/models/db";
import Waiter from "./src/models/waiters";
import { sendWaitlistMail } from "./src/models/utils";
const app = new Hono()


app.use("*",cors())

app.get('/',async(c) => {
    return c.text('waitlist service running')
})

app.post("/api/join", async(c) => {
    const {fullname, email} = await c.req.json()
    if(!fullname || !email) {
        return c.json({error: "fullname and email required... | bad request"})
    }
    if(!isValidEmail(email)) {
        return c.json({error: "invalid email"}, 400)
    }
    try{
        const existtingUser = await Waiter.findOne({email})
        if(existtingUser){
            return c.json({error: "user already in waitlist | conflict"},409)
        }
        const _ = await Waiter.create(
            {
                fullname,
                email
            }
        )
        await sendWaitlistMail(email, fullname)
        return c.json({message: "user added to waitlist"})
        
    }catch(e){
        console.log(e)
        return c.json({error: e},500)
    }
})

Conndb()
Bun.serve({fetch: app.fetch, port: 4000})
console.log("waitlist server running on port 4000")