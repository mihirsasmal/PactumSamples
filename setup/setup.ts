import { request, reporter, spec } from 'pactum';
import { addMsg } from 'jest-html-reporters/helper';
import { SpecData } from 'pactum/src/exports/reporter';
import  env  from '../environment';

const mySpecWithKey = function () {
    return spec().withQueryParams({ key: env.key });
};

const mySpec = function(){
 return spec();
};
const htmlReporter = {
    async afterSpec(data:SpecData) {
        const formattedInfo = JSON.stringify({Request: data.request, Response: data.response}, null, 2);
        await addMsg({message:formattedInfo, context :this.global});
     },
  };
 
  beforeAll(function () {
    request.setBaseUrl(env.baseUrl);
    reporter.add(htmlReporter);
  });


 
  export {mySpec, mySpecWithKey};