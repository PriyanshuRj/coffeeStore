import { NextResponse } from 'next/server'
import table from '../../../../libs/AirtableConfig';

export async function PUT(request:Request){
    try{
        const { searchParams } = new URL(request.url)
        const obj = Object.fromEntries(searchParams.entries())
        const id = obj.id;
        if(id){
            const findCoffeeSroteRecords = await table.select({filterByFormula: `id="${id}"`}).firstPage();
            if(findCoffeeSroteRecords.length){
                console.log(findCoffeeSroteRecords[0].id);
                var votes: number =  0;
                if(typeof findCoffeeSroteRecords[0].fields.votes ==='number') votes = findCoffeeSroteRecords[0].fields.votes
                const createRecords = await table.update([{
                    id : findCoffeeSroteRecords[0].id,
                    fields : {
                        votes : votes + 1
                    }
                }])
                return NextResponse.json({coffeeStore : createRecords[0].fields}, {status : 200})
            }
            else {
                return NextResponse.json({message:"ID was not found", id:id}, {status : 200})
            }
        }
        else {
        return NextResponse.json({message:"ID is missing"}, {status : 400})

        }
    } catch(e){
        console.log(e);
        return NextResponse.json({message:"Something went wrong"}, {status : 500})
    }
}