import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss']
})
export class CheckboxesComponent implements OnInit {

  name = 'Angular';

  ngOnInit(): void {

    const selectedElm = document.getElementById('selected');

    function showChecked() {
      selectedElm.innerHTML  = document.querySelectorAll('input[name=color]:checked').length;
    }

    document.querySelectorAll('input[name=color]').forEach(i => {
     i.onclick = () => showChecked();
    });


    // tslint:disable-next-line: only-arrow-functions
    $(document).ready(function() {

      // checkboxes with name 'color', 'color-div', and reset button
      const colors = $('input[name=\'color\']');
      const colorDiv = $('#color-div');




      // bind to 'colors' change event:
      // tslint:disable-next-line: only-arrow-functions
      colors.change(function() {

        // empty array to hold the color ids
        const idArr: any[] = [];

        // get the checked colors
        const checked = $('input[name=color]:checked');

        // loop and build array
        checked.each(function() {
          idArr.push($(this).prop('id'));
        });

        // function below
        toggleColors(idArr, colorDiv);

      });



      // reset to defaults
      // tslint:disable-next-line: only-arrow-functions
      $('#reset').click(function() {

        // function below
        setDefault(colorDiv);

        // back to hidden
        colorDiv.hide();

        // uncheck the check boxes
        $('input[name=color]:checked').removeAttr('checked');
      });

    });



    /// function to add color css classes based on checkbox id array
    function toggleColors(arr: any[] , elem: { removeClass: () => void; addClass: (arg0: any) => void; show: () => void; }) {

      const arrLen = arr.length;

      // set default if array is empty
      if (arrLen < 1) {
        setDefault(elem);
        return;
      }

      // remove classes, add classes
      elem.removeClass();
      for (let i = 0; i < arrLen; i++) {
        elem.addClass(arr[i]);
      }

      // unhide
      elem.show();

    }


    /// set the color div to "default"
    function setDefault(elem: { removeClass: any; addClass: any; show?: () => void; }) {
      elem.removeClass();
      elem.addClass('default');
    }



}
}

