import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  userInfo!: FormGroup;

  ngOnInit(){
    this.userInfo = new FormGroup({
      fullname:new FormControl(''),
      skills: new FormArray([
        new FormControl('')
      ]
      ),
      experience: new FormArray([
        new FormGroup({
          company: new FormControl(null),
          totalexp: new FormControl(null)
        })
      ])
    })
  }
  get skillsControlls(){
    return (<FormArray>this.userInfo.get('skills')).controls
  }

  get expControls(){
    return (<FormArray>this.userInfo.get('experience')).controls
  }
  addSkills(){
    (<FormArray>this.userInfo.get('skills')).push(new FormControl(''))
  }
  addExperience(){
    const formgroup =  new FormGroup({
      company: new FormControl(null),
      totalexp: new FormControl(null)
    });

    (<FormArray>this.userInfo.get('experience')).push(formgroup)
  }

  deleteExp(index:any){
    let frmArray = <FormArray>this.userInfo.get('experience');
    frmArray.removeAt(index);
  }
}
