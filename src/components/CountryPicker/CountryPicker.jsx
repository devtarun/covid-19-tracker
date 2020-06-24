import React, { useState, useEffect } from 'react';
import Styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

import { NativeSelect, FormControl } from "@material-ui/core";

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }

        fetchAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl className={Styles.formControl}>
            <NativeSelect default="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;