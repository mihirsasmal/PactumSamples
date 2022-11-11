import api from '../api/sampleMockApi';
import {mySpecWithKey} from '../setup/setup';
describe('Calling third API',()=>{
    test(' third test case', async()=>{
        
        await mySpecWithKey().get('thirdSample').expectStatus(200);

    });
});