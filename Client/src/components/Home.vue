<template>
  <div>
    <b-card
      title="Total Cost:"
      img-src="data:image/jpeg;base64,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"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <!-- <b-table thead-tr-class="d-none" :items="costSum"></b-table> -->
      <div>{{ costSum[0]["SUM(Cost)"] }}</div>
    </b-card>
  </div>

  <b-container class="bv-example-row">
    <b-row>
      <b-col><b-button v-b-modal.modal-1>New</b-button> </b-col>
    </b-row>
  </b-container>
  <div>
    <b-modal
      id="modal-1"
      title="BootstrapVue"
      @ok="onSubmit"
      @hidden="resetModal"
    >
      <b-form>
        <div class="cascading-dropdown">
          <div class="dropdown">
            <span>Category:</span>
            <select id="listCategory" v-model="selectedCategory">
              <option disabled value="">Select a Category</option>
              <option v-for="category in listCategory" :value="category.id">
                {{ category.name }}
              </option>
            </select>
          </div>
          <div class="dropdown">
            <span>Subcategory:</span>
            <select v-model="selectedSub_Category">
              <option disabled value="">Select a Subcategory</option>
              <option
                v-for="sub_category in listSub_category"
                :value="sub_category.id"
              >
                {{ sub_category.name }}
              </option>
            </select>
          </div>
        </div>

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
import moment from "moment";
export default {
  data() {
    return {
      costSum: "",
      listCategory: [],
      listSub_category: [],
      selectedCategory: null,
      selectedSub_Category: null,
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
    this.getAllData(),
      this.CategoryOptionType(),
      this.SubCategoryOptionType(),
      this.CostSum();
  },

  computed: {
    expenseData() {
      var customizedArray = [];
      for (var i = 0; i < this.getResult.length; i++) {
        var expense = {
          "#": this.getResult[i].id,
          category: 
            this.getCategoryName(this.getResult[i].CategoryID),
          sub_category:
            this.getSubCategoryName(this.getResult[i].Sub_CategoryID),
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
    getCategoryName(CategoryID) {
      var categoryName = null;
      for (var i = 0; i < this.listCategory.length; i++) {
        var Id = this.listCategory[i].id;
        if (Id === CategoryID) {  
            categoryName = this.listCategory[i].name;
        }
    }
    return categoryName;
  },

  getSubCategoryName(Sub_CategoryID) {
      var SubCategoryName = null;
      for (var i = 0; i < this.listSub_category.length; i++) {
        var Id = this.listSub_category[i].id;
        if (Id === Sub_CategoryID) {  
            SubCategoryName = this.listSub_category[i].name;
        }
    }
    return SubCategoryName;
  },

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

    async CostSum() {
      try {
        const res = await fetch("http://localhost:8081/cost");

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
        this.costSum = result.data;
      } catch (err) {
        this.costSum = err.message;
      }
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

    async saveNewExpense() {
      var data = {
        categoryId: this.selectedCategory,
        sub_categoryId: this.selectedSub_Category,
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
