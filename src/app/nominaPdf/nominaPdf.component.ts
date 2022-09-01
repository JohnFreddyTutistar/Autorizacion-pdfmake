import { Component } from '@angular/core';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-nominaPdf',
  templateUrl: './nominaPdf.component.html',
  styleUrls: ['./nominaPdf.component.css']
})
export class NominaPdfComponent {

  generar() {
    const pdfDefinition = {
      content: [
        {
          style: 'tableExample',
          table: {
            widths: [145, '*', 110],
            headerRows: 2,
            // keepWithHeaderRows: 1,
            body: [
              [
                {
                  rowSpan: 4,
                  image: `data:image/png;base64,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`,
                  width: 140,
                  height: 50
                },
                {
                  rowSpan: 2,
                  text: [
                    {
                      text: 'GESTIÓN DE TALENTO HUMANO',
                      bold: true,
                      alignment: 'center',
                    },
                  ],
                },
                {
                  text: [
                    { text: 'Código: ', bold: true },
                    { text: 'FR-GTH-38' },
                  ],
                  fontSize: 10
                },
              ],
              [
                '',
                '',
                {
                  text: [{ text: 'Versión: ', bold: true }, { text: '01' }], fontSize: 10
                },
              ],
              [
                '',
                {
                  rowSpan: 2,
                  text: 'AUTORIZACIÓN DE DESCUENTO POR NOMINA',
                  bold: true,
                  alignment: 'center',
                },
                {
                  text: [
                    { text: 'Fecha: ', bold: true },
                    { text: '31/08/2022' },
                  ],
                  fontSize: 10
                },
              ],
              [
                '',
                '',
                {
                  text: [{ text: 'Páginas: ', bold: true }, { text: '1 de 1' }], fontSize: 10
                },
              ],
            ],
          },
        },

        { text: '\n' },
        { text: '\n' },
        { text: '\n' },

        //Tabla fecha

        {
          style: 'tableExample',
          color: '#444',
          table: {
            alignment: 'left',
            widths: [22, 22, 50],
            headerRows: 2,
            // keepWithHeaderRows: 1,
            body: [
              [
                {
                  text: 'FECHA\nDD/MM/AAAA',
                  style: 'tableHeader',
                  colSpan: 3,
                  alignment: 'center',
                  bold: true,
                },
                {},
                {},
              ],
              [
                { text: '29', style: 'tableHeader', alignment: 'center' },
                { text: '08', style: 'tableHeader', alignment: 'center' },
                { text: '2022', style: 'tableHeader', alignment: 'center' },
              ],
            ],
          },
        },

        { text: '\n' },
        { text: '\n' },
        { text: '\n' },

        //contenido

        {
          text: [
            'Yo ',
            {
              text: '____________________________________________________________',
            },
            ', Identificado con cédula de ciudadanía No.',
            { text: '_________________' },
            ', autorizo de manera expresa e irrevocable al ',
            {
              text: 'CENTRO DE CUIDADOS CARDIONEUROVASCULARES PABÓN S.A.S. y/o CLINICA CARDIONEUROVASCULAR PABON S.A.S,',
              bold: true,
            },
            ', para descontar de mi salario, el valor correspondiente a $',
            { text: '__________________' },
            ', por concepto de: ',
            { text: '________________________________' },
            ', que a la fecha adeudo.\n\n\n',
          ],
        },
        {
          text: [
            'Igualmente autorizo de manera expresa e irrevocable al ',
            {
              text: 'CENTRO DE CUIDADOS CARDIONEUROVASCULARES PABÓN S.A.S. y/o CLINICA CARDIONEUROVASCULAR PABON S.A.S,',
              bold: true,
            },
            'para que la suma anteriormente descrita se descuente a partir de mi salario correxpondiente a la proxima nomina del año en curso y en cuotas iguales mensuales así.',
          ],
        },

        { text: '\n' },
        { text: '\n' },
        { text: '\n' },

        //tabla 2

        {
          style: 'tableExample',
          color: '#444',
          table: {
            alignment: 'left',
            widths: [80, 80],
            headerRows: 2,
            // keepWithHeaderRows: 1,
            body: [
              [
                {
                  text: 'NUMERO DE CUOTAS',
                  bold: true,
                  colSpan: 2,
                  alignment: 'center',
                },
                {},
              ],
              [
                { text: '1', style: 'tableHeader', alignment: 'center' },
                { text: '', style: 'tableHeader', alignment: 'center' },
              ],
              [
                { text: '2', style: 'tableHeader', alignment: 'center' },
                { text: '', style: 'tableHeader', alignment: 'center' },
              ],
              [
                { text: '3', style: 'tableHeader', alignment: 'center' },
                { text: '', style: 'tableHeader', alignment: 'center' },
              ],
              [
                { text: '4', style: 'tableHeader', alignment: 'center' },
                { text: '', style: 'tableHeader', alignment: 'center' },
              ],
              [
                { text: '5', style: 'tableHeader', alignment: 'center' },
                { text: '', style: 'tableHeader', alignment: 'center' },
              ],
              [
                { text: '6', style: 'tableHeader', alignment: 'center' },
                { text: '', style: 'tableHeader', alignment: 'center' },
              ],
            ],
          },
        },

        { text: '\n' },
        { text: '\n' },
        { text: '\n' },

        //Firma

        {
          text: [
            'Atentamente,\n\n\n',
            { text: '____________________________________\n' },
            { text: 'CC. No ' },
            { text: '10025546845' },
          ],
        },
      ],
    };
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }

  constructor() { }

}
