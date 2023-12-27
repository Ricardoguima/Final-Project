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
          <div class="cascading-dropdown">
            <div class="dropdown">
              <select v-model="selectedCountry">
                <option value="">Select a Category</option>
                <option
                  v-for="(category, id) in listCategory"
                  :value="cateogry"
                  :key="id"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
          </div>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Subcategory:"
          label-for="input-2"
        >
          <div class="cascading-dropdown">
            <div class="dropdown">
              <select v-model="selectedSub_Category">
                <option value="">Select a Subcategory</option>
                <option
                  v-for="(sub_category, id) in listSub_category"
                  :value="sub_category"
                  :key="id"
                >
                  {{ sub_category.name }}
                </option>
              </select>
            </div>
          </div>
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
      listCategory: [],
      listSub_category: [],
      selectedSub_Category: "",
      selectedSub_Category: "",
      getResult: [],
      selectedExpense: [],
      form: {
        categoryId: null,
        sub_categoryId: null,
        itemName: null,
        cost: null,
        Due_Date: null,
      },
      show: true,
    };
  },

  beforeMount() {
    this.getAllData(), this.CategoryOptionType(), this.SubCategoryOptionType();
  },

  computed: {
    expenseData() {
      var customizedArray = [];
      for (var i = 0; i < this.getResult.length; i++) {
        var expense = {
          "#": this.getResult[i].id,
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

    async CategoryOptionType() {
      try {
        const res = await fetch("http://localhost:8081/category");

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

        this.listCategory = result.data;
      } catch (err) {
        this.listCategory = err.message;
      }
    },

    // {
    //   const requestOptions = {
    //     method: "GET",
    //     headers: { "Content-Type": "application/json" },
    //   };
    //   const response = await fetch(
    //     "http://localhost:8081/category",
    //     requestOptions
    //   );

    //   this.listCategory = response.data;
    // },

    async SubCategoryOptionType() {
      try {
        const res = await fetch("http://localhost:8081/sub_category");

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

        this.listSub_category = result.data;
      } catch (err) {
        this.listSub_category = err.message;
      }
    },

    // {
    //   const requestOptions = {
    //     method: "GET",
    //     headers: { "Content-Type": "application/json" },
    //   };
    //   const response = await fetch(
    //     "http://localhost:8081/sub_category",
    //     requestOptions
    //   );
    //   this.listSub_Category = response.data;
    // },

    async saveNewExpense() {
      var data = {
        categoryId: this.form.categoryId,
        sub_categoryId: this.form.sub_categoryId,
        
        Item_Name: this.form.itemName,
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
