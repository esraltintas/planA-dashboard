# Plan A Frontend Coding Challenge

## Intro

Plan A helps companies monitor, reduce, and offset their carbon footprint, based on the data
they input about their emissions. Though this gives individual companies visibility on their
own emissions, it doesn't give us a clear idea on our progress on a country level.
This task addresses the other side of the problem; using satellite data to estimate the
amount of GHG emissions in the atmosphere over time to measure our actual impact.

## Install

It's recommended to install `yarn`:

```
npm install --global yarn
```

`npm` is also possible, but you may run into peer dependency issues. You can get around them with the `--legacy-peer-deps` flag.

To run the application, use `yarn install`

## Available Scripts

### `yarn start`

### `yarn test`

### `yarn lint`

## Task

Your task is to create a single page dashboard that shows the density of a given GHG for Germany over a predefined date range, with the following requirements:

The user should be able to select the GHG type (hint: also referred to as product). Please use this API to source the GHG type data: https://api.v2.emissions-api.org/ui/

> e.g. https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=DE&begin=2019-02-01&end=2022-06-15

Additionally, the following information should be displayed on the page

- Plan A logo (`/src/assets/images`)
- The provided description (`src/App.tsx`)
- Country (Germany)
- The start (2019-02-01) and end date (today)
- A chart (using the Recharts library; installed)

## What we’re looking for

### UX/layout

- Feel free to use any CSS preprocessors, scss is installed
- CSS organisation and best practices
- Responsiveness
- Accessibility (WCAG or BITV)

### General software development best practice

- Architecture
- Coding style
- Scalability
- Readability
- Testing your code

### Testing

- Include **at least 1 test** for the GHG type parameter selection

## Output

- Please create a private GitHub repository with your solution and share it with the Github users provided by our recruitment team.
- Please replace this README with instructions on how to run your code locally

## Libraries

Please use the following libraries for your solution.

- [react](https://reactjs.org/)
- [typescript](https://www.typescriptlang.org/)
- [recharts](https://recharts.org/en-US/)
- [testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)
