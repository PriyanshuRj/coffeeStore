import { NextResponse } from 'next/server'
import table from '../../../../libs/AirtableConfig';

export async function GET(request:Request){
    try{
        const { searchParams } = new URL(request.url)
        const obj = Object.fromEntries(searchParams.entries())
        const id = obj.id;
        if(id){
            const findCoffeeSroteRecords = await table.select({filterByFormula: `id="${id}"`}).firstPage();
            if(findCoffeeSroteRecords.length){

                return NextResponse.json({coffeeStore : findCoffeeSroteRecords[0].fields}, {status : 200})
            }
            else {
                return NextResponse.json({message:"ID was not found", id:id}, {status : 200})
            }
        }
        else {
        return NextResponse.json({message:"ID is missing"}, {status : 400})

        }
    } catch(e){
        return NextResponse.json({message:"Something went wrong"}, {status : 500})
    }
}