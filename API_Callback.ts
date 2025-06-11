// import SuperAgent, { Response } from 'superagent';

// let place: string = "London,GB";
// let lang: string = "en";

// const getCallback = function (err: any, res: Response) {
//     if (err) {
//         console.log(`API request to the url has failed: ${err}`);
//         return;
//     }
//     const result = res.body;
//     console.log(`Weather data: ${JSON.stringify(result)}`);
// };

// const url = `https://weather-api167.p.rapidapi.com/api/weather/forecast?place=${place}&cnt=3&units=standard&type=three_hour&mode=json&lang=${lang}`;
// SuperAgent.get(url)
//     .set('x-rapidapi-host', 'weather-api167.p.rapidapi.com')
//     .set('x-rapidapi-key', 'bb933660femsh2627c24bd382cf4p13ae6bjsn55c1bae42b89') // אל תשכח להוסיף את המפתח שלך
//     .then(getCallback)
//     .catch(getCallback);
