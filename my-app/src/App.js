import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import Art from './components/Art.js';

function App() {
    
    const [apiData, setApiData] = useState();
    const [apiError, setApiError] = useState(true);
    const [apiLoading, setApiLoading] = useState(true);

    useEffect(() => {
      const getArt = async () => {
        try {
        let apiUrl = "https://collectionapi.metmuseum.org/public/collection/v1/objects/436121";
        const { data } = await axios.get(apiUrl);
        setApiData(data);
        setApiLoading(false);
        setApiError(false);
        // console.log(data);
        } catch (error) {
          console.error('API error: Failed to fetch the data');
          setApiError(true);
        }
        setApiLoading(false);
      };

      getArt();
    }, []);


    return (
      <div className="App">
      { apiLoading &&
        <h1 > Loading... </h1>
      }
      { !apiError && 
        <Art data={ apiData }/>
      }
      { apiError && !apiLoading &&
        <h1> Error!!! Please try refreshing the page. </h1>
      }
      </div>
    );
  }

export default App;
