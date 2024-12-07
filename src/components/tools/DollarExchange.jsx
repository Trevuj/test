import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { TextField, Button, Card, Typography } from '@mui/material';

const DollarExchange = () => {
  const [amount, setAmount] = useState('');
  
  const { data: rates, isLoading } = useQuery('exchangeRates', async () => {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
    return response.data.rates;
  });

  // ... rest of the component
}; 