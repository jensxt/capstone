import React, { useState, useReducer, useE} from 'react';
import BookingForm from './BookingForm';
import { Navigate, useNavigate } from 'react-router-dom';

function Main() {
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }
    
    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());
    
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };

const navigate = useNavigate();
const submitForm = (formData) => {
    if (submitAPI(formData)){
        navigate("/confirmed");
    }
}
        const initializeTimes = () => {
            const today = new Date();
            return fetchAPI(today);
        };
      
      const updateTimes = (state, action) => {
        switch (action.type) {
          case 'UPDATE_TIMES':
            const selectedDate = new Date(action.payload);
        return fetchAPI(selectedDate);
          default:
            return state;
        }
      };
      const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div className='booking-form'>
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    </div>
  );
}

export default Main;
