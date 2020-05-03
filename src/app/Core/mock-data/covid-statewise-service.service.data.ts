import { CovidStatewiseServiceService } from '../services/dashboard-covid-services/covid-statewise-service.service';
import { of } from 'rxjs';

export function mockCovidStatewiseService():CovidStatewiseServiceService{
  const service = jasmine.createSpyObj('CovidStatewiseServiceService',['getStateWiseDetails','getDistrictWiseDetails']);
  service.getStateWiseDetails.and.returnValue(of(mockStateWiseData));
  service.getDistrictWiseDetails.and.returnValue(of(mockDistrictWiseData));
  return service;
}


export const mockStateWiseData:any= {

    cases_time_series: [
      {
        "dailyconfirmed": "1",
        "dailydeceased": "0",
        "dailyrecovered": "0",
        "date": "30 January ",
        "totalconfirmed": "1",
        "totaldeceased": "0",
        "totalrecovered": "0"
      },

    ],
    statewise: [
      {
        "active": "25072",
        "confirmed": "35909",
        "deaths": "1185",
        "deltaconfirmed": "1043",
        "deltadeaths": "31",
        "deltarecovered": "589",
        "lastupdatedtime": "01/05/2020 20:32:45",
        "recovered": "9648",
        "state": "Total",
        "statecode": "TT",
        "statenotes": ""
      },
      {
        "active": "0",
        "confirmed": "0",
        "deaths": "0",
        "deltaconfirmed": "0",
        "deltadeaths": "0",
        "deltarecovered": "0",
        "lastupdatedtime": "26/03/2020 07:19:29",
        "recovered": "0",
        "state": "Sikkim",
        "statecode": "SK",
        "statenotes": ""
      }

    ],
    tested: [
      {
        "individualstestedperconfirmedcase": "75.64102564",
        "positivecasesfromsamplesreported": "",
        "samplereportedtoday": "",
        "source": "Press_Release_ICMR_13March2020.pdf",
        "testpositivityrate": "1.32%",
        "testsconductedbyprivatelabs": "",
        "testsperconfirmedcase": "83.33333333",
        "totalindividualstested": "5900",
        "totalpositivecases": "78",
        "totalsamplestested": "6500",
        "updatetimestamp": "13/03/2020 00:00:00"
      },
    ]
  }

export const mockDistrictWiseData:any= {
    "Andaman and Nicobar Islands": {
      "districtData": {
        "North and Middle Andaman": {
          "notes": "",
          "active": 0,
          "confirmed": 1,
          "deceased": 0,
          "recovered": 1,
          "delta": {
            "confirmed": 0,
            "deceased": 0,
            "recovered": 0
          }
        },
        "South Andaman": {
          "notes": "",
          "active": 17,
          "confirmed": 32,
          "deceased": 0,
          "recovered": 15,
          "delta": {
            "confirmed": 0,
            "deceased": 0,
            "recovered": 0
          }
        }
      },
      "statecode": "AN"
    },
  }

