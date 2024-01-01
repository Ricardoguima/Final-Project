<script>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";

export default {
  data() {
    return {
      getResult: [],
      getExpenseByExpenseId: [],
      showExpenseListView: true,
      selectedExpense: {
        userId: [],
        categoryId: null,
        sub_categoryId: null,
        cost: null,
        date: null,
      },
    };
  },
  
  methods: {
    formatResponse(res) {
      return JSON.stringify(res, null, 2);
    },

    selectExpense(expense) {
      console.log(expense.id);
      this.selectedExpense = user;
      this.showExpenseListView = false;
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
    }
  }
};


</script>

<template>
  <header>
    <div class="wrapper">
    </div>
  </header>

  <main>
    <router-view/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
