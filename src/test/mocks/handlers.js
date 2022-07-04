import { rest } from 'msw'
import { aggregated, all, projecta } from './data'





export const handlers = [


    rest.get('http://localhost:4000/login',
        (req, res, ctx) => {

            if (req.body.user) {

                const storedUser = "test";
                const storedPassword = "test";

                if (req.body.user.user == storedUser && req.body.user.password == storedPassword) {

                    return res(
                        ctx.status(200),
                        ctx.json({
                            success: true,
                            accessToken: "test"
                        })
                    )
                }
                else {
                    ctx.status(200),
                        ctx.json({
                            success: false,
                        })
                }
            }

        }),


    rest.get('http://localhost:4000/projecttitles',
        (req, res, ctx) => {

            return res(
                ctx.status(200),
                ctx.json(titles)
            )
        }),

    rest.get('http://localhost:4000/logs',
        (req, res, ctx) => {

            if (req.body.project == "all") {
                ctx.status(200),
                    ctx.json(all)
            }
            else if (req.body.project === "ProjectA") {
                ctx.status(200),
                    ctx.json(projecta)
            }
            else {
                res.json(aggregated);
            }
        }),





]