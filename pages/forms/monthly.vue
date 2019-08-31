<template>
 <v-container grid-list-xl fluid>
      <v-layout row wrap>
 <v-flex xs12>
 <v-subheader class="pa-0 mt-3">Welcome to the monthly survey bt Microsoft corporation. The responses to this form are completely
 confidential and our only aim is to make Microsoft the best place to work for employees with these surverys.</v-subheader>
  <v-form v-model="valid">
      <v-subheader class="pa-0 mt-3">Monthly survey</v-subheader>
      <v-text-field
        label="What's your age?"
        name="age"
        type="number"
        v-model="formModel.age"
       
        required
      ></v-text-field> 
      <v-text-field
        label="Phone"
        placeholder="(###) ### - ####"
        v-validate="'required'"
        data-vv-name="phone"     
        :error-messages="errors.collect('phone')"                
        v-model="formModel.phone"
        mask="phone"
        required
      ></v-text-field>    
      <v-select
        label="Has anybody in your family suffered from mental health issues"
       
        name="fh"
       
          :items="['Yes','No']"  
        v-model="formModel.family_history"
        required
      ></v-select>     
    <v-select
      label="Do you feel there is any kind of work interference from your senior managers or tech leads ?"
      v-model="formModel.work_interfere"
      :items="items"
      required
    ></v-select>
    <v-select
      label="Are you aware of any mentel health benefits provided by your organization?"
        v-validate="'required'"
         :items="['Yes','No','Don\'t know']"     
      v-model="formModel.benefits"
      required
    ></v-select>
    <v-select
      label="Do you trust the organization about anonymity of the survey"
        v-validate="'required'"
        :items="['Yes','No']"        
      v-model="formModel.anonymity"
      required
    ></v-select>
    <v-select
      label="Are you confortable discussing your physical health with your employer's "
        v-validate="'required'"
       :items="['Yes','No','Don\'t know']"   
      v-model="formModel.phys_health_consequence"
      required
    ></v-select>
    <v-select
      label="Are you comfortable talking about mental health in an interview?"
        v-validate="'required'"
         :items="['Yes','No']"     
      v-model="formModel.mental_health_interview"
      required
    ></v-select>
    <v-select
      label="Has any of your colleague had bad consequences due to mental health?"
        v-validate="'required'"
         :items="['Yes','No']"   
      v-model="formModel.obs_consequence"
      required
    ></v-select>
    <v-select
      label="Is the nature of your work remote most of the time?"
        v-validate="'required'"
        :items="['Yes','No']"    
      v-model="formModel.remote_work"
      required
    ></v-select>
    <v-select
      label="How easy is it for you to take leave in case of bad health"
        v-validate="'required'"
        :items="['Somewhat easy','Don\'t know','Very easy','Somewhat difficult','Very difficult']"    
      v-model="formModel.leave"
      required
    ></v-select>
    <div class="form-btn">
      <v-btn outline @click="submit" color="primary">Submit</v-btn>
      <v-btn outline @click="clear">Clear</v-btn>
    </div>

  </v-form>
 </v-flex>
 </v-layout>
 </v-container>
</template>

<script>

export default {
  $_veeValidate: {
    validator: 'new'
  },    
  data: () => ({
    formModel: {
      








    },
    valid: true,
    items:['often','sometimes','never','rarely']

  }),
  mounted () {
    this.$validator.localize('en', this.dictionary);
  },  
  methods: {
    submit () {
      this.$validator.validateAll();
      this.$store.commit("postdata",this.formModel)
    },
    clear () {
      this.formModel = {};
      this.$validator.reset();
    }    
  }
};
</script>
