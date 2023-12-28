import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public Name :string="";
  public valid():string
  {
    if(this.Name.length>=10)
    {
        return "U exceeded ur limit";
    }
    return "u are on the track";
  }
}
