
import {test} from 'vitest';
import { mountSuspended ,renderSuspended , registerEndpoint} from '@nuxt/test-utils/runtime'

import Form from '/components/Form'

// describe('import vue components',()=>{
test('normal imports as expected' , async ()=>{
    const cmp=await mountSuspended(Form)
    expect(cmp).toBeDefined();
})


test('agree terms and conditions checkbox',async()=>{
    const cmp=await mountSuspended(Form);
    const checkBoxDiv=await cmp.find('#submit');
    const checkBox=await checkBoxDiv.find('#link-checkbox');
    checkBox.trigger('change')
    const checkBoxUpadated = await cmp.find('#link-checkbox');
    expect(checkBoxUpadated.wrapperElement.value).toBe('yes');
})

test('submit button click',async()=>{
    const cmp=await mountSuspended(Form);
    const checkBoxDiv=await cmp.find('#submit');
    const checkBox=await checkBoxDiv.find('#link-checkbox');
    await checkBox.trigger('change');
    const submitButton=await cmp.find('#submitForm');
    await submitButton.trigger('click');
    const toCheck='Please enter email address!';
    const findDiv=cmp.find('#emailAddress');
    const findDivPara=findDiv.find('p');
    console.log(findDivPara.html());
    expect(findDivPara.text()).toContain(toCheck);
})



test('finding all the checkboxes',async()=>{
    const findCmp=await mountSuspended(Form);
    const findDiv=await findCmp.find('#frameWork')
    const findAll=await findDiv.findAll('input[type="checkbox"]');
    await findAll[0].setChecked(true);
    await findAll[1].setChecked(true);

    const findAllAfter=await findDiv.findAll('input[type="checkbox"]');
    let checked = 0;
    for(let i=0; i<= findAllAfter.length; i++){
        if(findAllAfter[i]) {
            if (findAllAfter[i].wrapperElement.checked) {
                checked++;
            }
        }
    }
    expect(checked).toBe(2);
})

test('checking for the gender checkbox',async()=>{
    const findCmp=await mountSuspended(Form);
    const findDiv=await findCmp.find('#selectGender');
    const findAll=await findDiv.findAll('input[type="checkbox"]');
    await findAll[0].setChecked(true);
    let checked=0;
    console.log(findAll);
    for(let i=0; i<= findAll.length; i++){
        if(findAll[i]) {
            if (findAll[i].wrapperElement.checked) {
                checked++;
            }
        }
    }
    expect(checked).toBe(1);
})