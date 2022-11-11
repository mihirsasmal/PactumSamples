import api from '../api/sampleMockApi';
import {mySpecWithKey} from '../setup/setup';
describe('Calling second API',()=>{
    test('second test case', async()=>{

        await mySpecWithKey().get('secondSample').expectStatus(200);

    });
});