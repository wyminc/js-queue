/**
 * Queue Class
 * -----------------------------
 * A Queue data structure implemented as an ES6 class
 *
 * A queue is a data structure in which the first element is inserted from one end called
 * REAR (also called tail), and the deletion of existing element takes place from the other
 * end called as FRONT (also called head).  This makes queue a FIFO (first in first out), or
 * the element that is inserted first will always be the first to be removed.
 * You will be using an Object as an internal datastore.  Do not use an Array!
 *
 * There should be a constructor method with no arguments.
 *
 * Note that the _storage Object is OPTIONAL as there is a way to implement this exercise
 * without the _storage Object.
 *
 * @private {object} _storage              Default value should be an empty object. (Optional)
 * @private {number} _front                Default value should be set null.
 * @private {number} _back                 Default value should be set null.
 *
 */

 class Queue {
     constructor() {
         this._storage = {};
         this._front = null;
         this._back = null;
     }

     size() {
        if(this._back === null) {
            this._back = 0;
            return this._back;
        } else {
            return this._back;
        }
     }

     enqueue(item) {
        if(this._back === null || (Object.keys(this._storage).length === 0 && this._front > 0)) {
            this._front = 0;
            this._back = 0;
            this._storage[this._back] = item;
            this._back++;
            return this.size();
        } else {
            this._storage[this._back] = item;
            this._back++;
            return this.size();
        }
     }

     dequeue() {
        if(this._front === null || (Object.keys(this._storage).length === 0 )) {
            return null;
        } else {
            var dequeuedItem = this._storage[this._front];
            delete this._storage[this._front];
            this._front++;
            this._back--;
            return dequeuedItem;
        }
        
     }

     peek() {
        if(this._front === null || this._back === null) {
            return null;
        } else {
            return this._storage[this._front];
        }
     }
 }


  /**
   * Queue Class Method => size()
   * -----------------------------
   * Returns the size of the queue.
   *
   * @name size
   * @return {Number}
   */

  /**
   * Queue Class Method => enqueue(item)
   * -----------------------------
   * Puts an item in the queue.
   *
   * @name enqueue
   * @param item
   * @return {Number} returns the new size
   */

  /**
   * Queue Class Method => dequeue()
   * -----------------------------
   * Takes an item off the queue and returns it.
   *
   * @name dequeue
   * @return {Object}   Note that everything in javascript is an Object.
   */

   /**
   * Queue Class Method => peek()
   * -----------------------------
   * Returns the value of the first element without dequeueing.
   *
   * @name peek
   * @return {Object}   Note that everything in javascript is an Object.
   */

module.exports = Queue;