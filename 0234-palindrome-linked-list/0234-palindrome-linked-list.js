/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
let s = head
let f = head

while(f && f.next){
    s= s.next
    f= f.next.next
}

let prev = null
let curr = s

while(curr){
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
}

let first = head
let second  = prev


while(second){
    if(first.val !== second.val) return false
first = first.next
second = second.next


}

return true


};