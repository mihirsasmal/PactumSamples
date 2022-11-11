import {mock} from 'pactum';
import * as fs from 'fs';
import * as path from 'path';

const api ={

     startMockApi:()=>{
    const mockResponseBody = fs.readFileSync(
        path.resolve(__dirname, '../fixtures/Scripts/sample.json'),
        'utf8'
    );

    mock.addInteraction({
        request: {
            method: 'GET',
            path: '/api/firstSample'
        },
        response: {
            status: 200,
            body: mockResponseBody
        }
    });

    mock.addInteraction({
        request: {
            method: 'GET',
            path: '/api/secondSample',
            queryParams:{key:'12345678'}            
        },
        response: {
            status: 200,
            body: mockResponseBody
        }
    });

    mock.addInteraction({
        request: {
            method: 'GET',
            path: '/api/thirdSample', 
            queryParams:{key:'12345678'}           
        },
        response: {
            status: 200,
            body: mockResponseBody
        }
    });

    return mock.start(8000);
},

stopMockApi:()=>{
    return mock.stop();
}

};

export default api;