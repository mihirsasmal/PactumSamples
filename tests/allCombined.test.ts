import api from '../api/sampleMockApi';
import {mySpec,mySpecWithKey} from '../setup/setup';

// In this all tests passed with resolving stored value
describe('Calling first API',()=>{
    test('first test case', async()=>{

        await api.startMockApi();
        await mySpec().get('firstSample').expectStatus(200).stores('key','id');
    });
});

describe('Calling second API',()=>{
    test('second test case', async()=>{

        await mySpecWithKey().get('secondSample').expectStatus(200);
    });
});

describe('Calling third API',()=>{
    test(' third test case', async()=>{

        await mySpecWithKey().get('thirdSample').expectStatus(200);
        await api.stopMockApi();
    });
});