import React, { useRef, useEffect, useState, useCallback } from "react";
import Cart from "../Components/Cart";
import * as atlas from "azure-maps-control";
import dotenv from "dotenv";

var datasource, popup, testData;
var bubbleLayer, symbolLayer;

function Home() {
  const map = useRef(null);
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [isSymbolLayer, setIsSymbolLayer] = useState(false);

  var popupTemplate =
    '<div class="Infobox"><div class="name">Country : {iCountry}</div><div class="name">Confirmed : {iConfirmed} </div><div class="name">Recovered : {iRecovered} </div><div class="name">Deaths   : {iDeaths}</div></div>';

  const addLayer = useCallback(() => {
    if (!map.current) return;
    //Wait until the map resources are ready.
    map.current.events.add("ready", function () {
      //Create a data source and add it to the map.
      datasource = new atlas.source.DataSource();
      map.current.sources.add(datasource);
      datasource.add(testData);

      if (!popup)
        popup = new atlas.Popup({
          position: [0, 0],
          pixelOffset: [0, -18],
          closeButton: false,
        });

      if (!isSymbolLayer) {
        bubbleLayer = new atlas.layer.BubbleLayer(datasource, null, {
          opacity: 0.6,
          color: [
            "step",
            ["get", "cases"],
            "blue",
            100,
            "green",
            1000,
            "limegreen",
            10000,
            "yellow",
            100000,
            "orange",
            1000000,
            "tomato",
            10000000,
            "red",
          ],

          radius: [
            "step",
            ["get", "cases"],
            5,
            100,
            7,
            1000,
            10,
            10000,
            14,
            100000,
            20,
            1000000,
            27,
            10000000,
            35,
          ],
        });
        if (symbolLayer) map.current.layers.remove(symbolLayer);
        map.current.layers.add(bubbleLayer);

        map.current.events.add("mouseover", bubbleLayer, function (e) {
          var properties = e.shapes[0].getProperties();

          var content = popupTemplate
            .replace(/{iCountry}/g, properties.country)
            .replace(/{iConfirmed}/g, properties.cases)
            .replace(/{iRecovered}/g, properties.recovered)
            .replace(/{iDeaths}/g, properties.deaths);

          var coordinate = e.shapes[0].getCoordinates();

          popup.setOptions({
            content: content,
            position: coordinate,
          });

          popup.open(map.current);
        });

        map.current.events.add("mouseleave", bubbleLayer, function () {
          popup.close(map.current);
        });
      } else {
        symbolLayer = new atlas.layer.SymbolLayer(datasource);
        if (bubbleLayer) map.current.layers.remove(bubbleLayer);
        map.current.layers.add(symbolLayer);

        map.current.events.add("mouseover", symbolLayer, function (e) {
          var properties = e.shapes[0].getProperties();

          var content = popupTemplate
            .replace(/{iCountry}/g, properties.country)
            .replace(/{iConfirmed}/g, properties.cases)
            .replace(/{iRecovered}/g, properties.recovered)
            .replace(/{iDeaths}/g, properties.deaths);

          var coordinate = e.shapes[0].getCoordinates();

          popup.setOptions({
            content: content,
            position: coordinate,
          });

          popup.open(map.current);
        });

        map.current.events.add("mouseleave", symbolLayer, function () {
          popup.close(map.current);
        });
      }
    });
  }, [isSymbolLayer, popupTemplate]);

  useEffect(() => {
    addLayer();
  }, [addLayer]);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    const getData = async () => {
      const res = await fetch(`https://disease.sh/v3/covid-19/countries`);
      let newData = await res.json();
      setData(newData);

      var testDataNew = newData.map((item) => {
        return new atlas.data.Feature(
          new atlas.data.Point([item.countryInfo.long, item.countryInfo.lat]),
          {
            ...item,
          }
        );
      });

      testData = testDataNew;
    };

    const getMap = () => {
      dotenv.config();
      var API_KEY = process.env.REACT_APP_API_KEY;

      map.current = new atlas.Map("myMap", {
        style: "grayscale_light",
        zoom: 1.5,
        view: "Auto",

        //Add authentication details for connecting to Azure Maps.
        authOptions: {
          //Use an Azure Maps key. Get an Azure Maps key at https://azure.com/maps. NOTE: The primary key should be used as the key.
          authType: "subscriptionKey",
          subscriptionKey: API_KEY,
        },
      });
    };

    getData();
    getMap();
    addLayer();
  });

  const handleChange = (event) => {
    const countryName = event.target.value.toUpperCase();

    if (countryName === "") {
      setIsFilter(false);
    } else {
      const newdata = data.filter((item) =>
        item.country.toUpperCase().includes(countryName)
      );
      setIsFilter(true);
      setDataFilter(newdata);
    }
  };

  function selectLayer(event) {
    setIsSymbolLayer(event.target.checked);
    if (popup) popup.close(map.current);
  }

  return (
    <Cart>
      <div>
        <h2 id="live-data">Covid-19 Live Data</h2>
        <div id="map-container">
          <div id="myMap">
            <div class="sidebar">
              <label class="switch">
                <input type="checkbox" onClick={selectLayer} />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div id="side-container">
            <div id="search">
              <input
                type="search"
                id="search-box"
                placeholder="Search e.g. India"
                onChange={handleChange}
                size="15"
              />
            </div>
            <div id="table-container" class="table-responsive">
              <table
                class="table table-striped table-hover table-bordered"
                id="table"
              >
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                  </tr>
                </thead>

                <tbody id="table-body">
                  {!isFilter &&
                    data.map((element) => {
                      return (
                        <tr>
                          <td>
                            <b>{element.country}</b>
                          </td>
                          <td>{element.cases}</td>
                          <td>{element.recovered}</td>
                          <td>{element.deaths}</td>
                        </tr>
                      );
                    })}
                  {isFilter && dataFilter.length ? (
                    dataFilter.map((element) => {
                      return (
                        <tr>
                          <td>
                            <b>{element.country}</b>
                          </td>
                          <td>{element.cases}</td>
                          <td>{element.recovered}</td>
                          <td>{element.deaths}</td>
                        </tr>
                      );
                    })
                  ) : isFilter ? (
                    <tr>
                      {" "}
                      <td>
                        <b>No data found!</b>
                      </td>
                    </tr>
                  ) : (
                    ""
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Cart>
  );
}

export default Home;
