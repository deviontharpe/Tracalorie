//Storage Controller

//Item Controller
const ItemCtrl = (function() {
  //Item COnstructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  //Data Structure *State*
  const data = {
    items: [
      { id: 0, name: "Steak Dinner", calories: 1200 },
      { id: 1, name: "Cookies", calories: 200 },
      { id: 2, name: "Eggs", calories: 500 }
    ],
    currentItem: null,
    totalCalories: 0
  };

  //Makes it public - Public Methods
  return {
    getItems: function() {
      return data.items;
    },
    logData: function() {
      return data;
    }
  };
})();

//UI Controller
const UICtrl = (function() {
  const UISelectors = {
    itemList: "#item-list",
    addBtn: ".add-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories"
  };

  return {
    populateItemList: function(items) {
      let html = "";

      items.forEach(function(item) {
        html += `<li class="collection-item" id="item-${item.id}">
          <strong>${item.name}:</strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fas fa-pencil-alt"></i>
          </a>
        </li>`;
      });

      //Insert LI's
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      };
    },
    getSelectors: function() {
      return UISelectors;
    }
  };
})();

//App Controller
const App = (function(ItemCtrl, UICtrl) {
  //Load Event Listener
  const loadEventListeners = function() {
    const UISelectors = UICtrl.getSelectors();

    //Add item Event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", itemAddSubmit);
  };

  //Item Add Submit
  const itemAddSubmit = function(e) {
    //Get Form input from UI Controller
    const input = UICtrl.getItemInput();

    //Check both fields are filled out
    if (input.name !== "" && input.calories !== "") {
      //Add item
      const newitem = ItemCtrl.addItem;
    }
    e.preventDefault();
  };

  //Makes it public - Public Methodss
  return {
    init: function() {
      console.log("Initializing App");

      //Get items from data structure
      const items = ItemCtrl.getItems();

      //Populate list with Items
      UICtrl.populateItemList(items);

      //Load Event Listeners
      loadEventListeners();
    }
  };
})(ItemCtrl, UICtrl);

//Initializing
App.init();
