import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform{
       
      //  transform(value: any,start?:number,end?:number) {
        transform(value: any,start:number=0,end:number=20) {
           
           let temp=(<string> value);
        //    return (temp.substring(0,20)+"..."); 

        // let min=start?start:0;
        // let max=end?end:20;

        // return (temp.substring(start,end)+"..."); 
        // return (temp.substring(min,max)+"..."); 
        return (temp.substring(start,end)+"..."); 

        }
}