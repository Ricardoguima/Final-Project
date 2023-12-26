<template>
  <!-- <div class="mt-4">
    <b-card img-src="https://placekitten.com/300/300"  img-right class="mb-3">
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>
    </div> -->

  <BarChart />

  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col><b-button v-b-modal.modal-1>New</b-button> </b-col>
      </b-row>
    </b-container>
    <b-modal
      id="modal-1"
      title="BootstrapVue"
      @ok="onSubmit"
      @hidden="resetModal"
    >
      <b-form v-if="show">
        <b-form-group id="input-group-1" label="Category" label-for="input-1">
          <b-form-select
            id="input-1"
            v-model="form.categoryId"
            :options="category"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Subcategory:"
          label-for="input-2"
        >
          <b-form-select
            id="input-2"
            v-model="form.sub_categoryId"
            :options="sub_category"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-3" label="Item Name:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.itemName"
            placeholder="Enter item"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Cost:" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.cost"
            placeholder="Enter Cost of Expense"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Date:" label-for="input-5">
          <b-form-datepicker
            id="example-datepicker"
            v-model="form.Due_Date"
            class="mb-2"
          ></b-form-datepicker>
        </b-form-group>
      </b-form>
    </b-modal>

    <b-table
      select-mode="single"
      selectable
      striped
      hover
      :items="expenseData"
      @row-selected="onExpenseRowSelected"
    ></b-table>
  </div>
</template>

<script>
import BarChart from "../components/BarChart.vue";
import moment from "moment";
export default {
  components: { BarChart },
  data() {
    return {
      getResult: [],
      selectedExpense: [],
      form: {
        categoryId: null,
        sub_categoryId: null,
        itemName: "",
        cost: null,
        Due_Date: null,
      },
      show: true,
      category: [
        { text: "Grocery", value: 2 },
        { text: "Car", value: 3 },
        { text: "House", value: 4 },
      ],
      sub_category: [
        { text: "Insurance", value: 1 },
        { text: "Gardner", value: 2 },
        { text: "Maintenance", value: 3 },
      ],
    };
  },

  beforeMount() {
    this.getAllData();
  },

  computed: {
    expenseData() {
      var customizedArray = [];
      for (var i = 0; i < this.getResult.length; i++) {
        var expense = {
          id: this.getResult[i].id,
          category: this.getResult[i].CategoryID,
          sub_category: this.getResult[i].Sub_CategoryID,
          itemName: this.getResult[i].Item_Name,
          cost: this.getResult[i].Cost,
          Due_Date:
            this.getResult[i].Due_Date != null
              ? moment(this.getResult[i].Due_Date).format("MM-DD-YYYY")
              : "",
        };

        customizedArray.push(expense);
      }
      return customizedArray;
    },
  },
  methods: {
    hideModal(id) {
      this.$bvModal.hide(id);
    },

    onSubmit(bvModalEvent) {
      bvModalEvent.preventDefault();
      this.saveNewExpense();
      console.log("Submit Clicked");
    },

    resetModal() {
      this.form = {};
    },

    async saveNewExpense() {
      var data = {
        categoryId: this.form.categoryId,
        sub_categoryId: this.form.sub_categoryId,
        itemName: this.form.Item_Name,
        cost: this.form.cost,
        Due_Date: this.form.Due_Date,
      };

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(
        "http://localhost:8081/newexpense",
        requestOptions
      );
      if (response.ok) {
        this.hideModal("modal-1");
        this.form = {};
      }
    },
    async getAllData() {
      try {
        const res = await fetch("http://localhost:8081/expense");

        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }

        const data = await res.json();

        const result = {
          status: res.status + "-" + res.statusText,
          headers: {
            "Content-Type": res.headers.get("Content-Type"),
            "Content-Length": res.headers.get("Content-Length"),
          },
          length: res.headers.get("Content-Length"),
          data: data,
        };

        this.getResult = result.data;
      } catch (err) {
        this.getResult = err.message;
      }
    },
  },
};
</script>
