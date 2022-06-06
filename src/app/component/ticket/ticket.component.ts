import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  
  displayedColumns: string[] = ['deliveryId', 'customerType', 'deliveryStatus', 'expectedDeliveryTime', 'timeToReachDestination'];
  public tickets: any = [];

  constructor(private ticketService: TicketService) { 
    this.ticketService.getTickets()
    .subscribe(tickets => {
      this.tickets = tickets;
    }, (err: any) => {
      console.log("Unable to login");
    });
  }

  ngOnInit(): void {
  }

}
