import { NextResponse } from 'next/server'
import table from '../../../../libs/AirtableConfig';

export async function POST(request:Request) {
    const {id, votes, name, address, imgUrl} = await request.json();
    try{

        if(id  &&  name != undefined ){
            
            const findCoffeeSroteRecords = await table.select({filterByFormula: `id="${id}"`}).firstPage();
        
            if(findCoffeeSroteRecords.length){
                return NextResponse.json({ coffeeStore : findCoffeeSroteRecords[0].fields }, { status: 200 })
            }
            else {
                const createRecords = await table.create([{
                    fields : {
                        id:id,
                        votes:votes,
                        name:name,
                        address:address,
                        imgUrl:imgUrl
                    }
                }])
                return NextResponse.json({ message: "created record", coffeeStore:createRecords[0].fields }, { status: 200 })
            }
        } else {
            return NextResponse.json({ message: "Please provide all details" }, { status: 400 })
        }

    } catch (err){
        return NextResponse.json({ message: "Server error",err }, { status: 500 })
    }
}
