import type { Request, Response, Router } from "express";
export default (router: Router): void => {
    router.post("/register", (req: Request, res: Response) => {
        res.json("123");
    });
};