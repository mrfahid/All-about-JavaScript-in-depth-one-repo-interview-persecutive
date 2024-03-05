// Callback Hell: Nested callbacks stacked below one another forming a pyrmid structure.
// (Pyrmid of Doom)
// This style of programming becomes difficult to understand and manage.

function sum(a, b) {
  console.log(a + b);
}

function calculate(a, b, sumCallback) {
  sumCallback(a, b)
}

calculate(1, 2, sum) // 3

Object.freeze

function getData(dateId, getNextDate) {
  setTimeout(() => {
    console.log("Data", dateId);
    if (getNextDate) {
      getNextDate();
    }
  }, 2 * 1000);
}

console.log('callback 1');
getData(1, () => {
  console.log("callback 2");
  getData(2, () => {
    console.log("callback 3");
    getData(3, () => {
      console.log("callback 4");
      getData(4, () => {
        console.log("callback 5");
        getData(5, () => {
          console.log("callback 6");
          getData(6, () => {
            console.log("callback 7");
            getData(7, () => {
              console.log("callback 8");
              getData(8, () => {
                console.log("callback 9");
                getData(9, () => {
                  console.log("callback 10");
                  getData(10, () => {
                    console.log("callback 11");
                    getData(11, () => {
                      console.log("callback 12");
                      getData(12, () => {
                        console.log("callback 13");
                        getData(13, () => {
                          console.log("callback 14");
                          getData(14, () => {
                            console.log("callback 15");
                            getData(15);
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
