# FOOTPRINT-FRONT

This project was developed during a last week of work at a full time job, which included a major release and training my replacement.
As such, the effective development time has been around 5 working days, and I've made some sacrifices.


The good:

- The app has a React JS front end, Node JS back end, and Mongo DB database.
- Most everything has documentation outside of some self-explanatory utility functions.
- Most everything has unit tests.

The bad:
- Given the limited time, it was implemented in classic JS rather than Typescript. I am experience with typed languages and familiar with Typescript, it should pose no problems given a longer timeframe.
- I was able to mock the axios(api call library), though not the context and the canvas for the charts. Mocking context apparently requires a separate library, which would have added an extra day.
- The result is a lack of integration and E2E tests. This is not a result of inability nor inexperience, merely a lack of knowledge and a limited timeframe.

The ugly:
- The code is not as good as I'd like. That said, code that ships, not code that's perfect.
- Not a talented designer, though I've put in a bit of work towards the Boostrap classes. Note that I use color inversion on my screen, therefore the color scheme on a client machine will be quite ugly. This can be rapidly solved.

The backend can be found [here](https://github.com/vectorkt/tt-chkmrx-back)

## APP Documentation

To run the APP you will two commands.

```
npm install
npm run start
```

It should automatically open the default 3000 port.

The test command is:

```
npm run test
```

If there are any issues, let me know, I'll deploy it somewhere.
