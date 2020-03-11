import { Component, OnInit } from '@angular/core';
import { Cliente } from '../confirmar-reserva/cliente';
import { ClienteService } from 'src/app/servicio/cliente.service';
import swal from 'sweetalert2'
@Component({
  selector: 'app-eliminar-huesped',
  templateUrl: './eliminar-huesped.component.html',
  styleUrls: ['./eliminar-huesped.component.css']
})
export class EliminarHuespedComponent implements OnInit {
  clientes: Cliente[];
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }
  delete(cliente: Cliente): void {
    swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.clienteService.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli !== cliente)
            swal.fire(
              'Cliente Eliminado!',
              `Cliente ${cliente.nombre} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

    

}
