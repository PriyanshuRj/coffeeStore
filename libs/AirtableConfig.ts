import  Airtable  from 'airtable'
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_PERSONAL_ACCESS_TOKEN
});

const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY ? process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY : "");

const table = base("coffeeStores");
export default table;