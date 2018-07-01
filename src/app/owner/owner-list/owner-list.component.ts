import {Component, OnInit} from '@angular/core';
import {Owner} from '../owner';
import {OwnerService} from '../owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Owner[] = [
    {
      id: 1,
      firstname: 'Jan',
      lastname: 'Kowalski',
      address: {
        city: 'Poznan',
        postalcode: '60-000',
        street: 'Polwiejska',
        country: 'Poland'
      },
      pets: [
        {id: 1, name: 'Azor', birthDate: '2017-01-01'},
        // {id: 2, name: 'Mazor', birthDate: '2016-06-06'},
        // {id: 3, name: 'Dozor', birthDate: '2014-04-04'}
      ]
    } as Owner,
    {
      id: 2,
      firstname: 'Adam',
      lastname: 'Nowak',
      address: {
        city: 'Poznan',
        postalcode: '60-300',
        street: 'Rynek',
        country: 'Poland'
      },
      pets: [{id: 4, name: 'Puszek', birthDate: '2018-05-05'}]
    } as Owner,
  ];

  // referencja do wybranego Ownera
  selectedOwner: Owner;

  constructor(private ownerService: OwnerService) {
  }

  ngOnInit(): void {
    this.ownerService.getOwners().subscribe(
      owners => {
        console.log(JSON.stringify(owners));
        this.owners = owners;
      },
      error => console.log(JSON.stringify(error))
    );
  }

  onOwnerClicked(owner: Owner) {
    this.selectedOwner = owner;
  }

  createNewOwner() {
    const owner = {
      firstname: 'Jakub',
      lastname: 'Bukaj',
      address:{
        country: 'Poland'
      }
    };
    this.ownerService.createOwner(owner)
      .subscribe(data => {
        console.log(JSON.stringify(data));
      },
        err => console.log(JSON.stringify(err)));
  }
}
