import api from '../api/sampleMockApi';
import {mySpec} from '../setup/setup';
describe('Calling first API',()=>{
    test('first test case', async()=>{

        await api.startMockApi();
        await mySpec().get('firstSample').expectStatus(200).stores('key','id');
    });
});