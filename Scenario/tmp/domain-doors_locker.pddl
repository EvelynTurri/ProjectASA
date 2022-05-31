;; domain file: domain-doors_locker.pddl
(define (domain doors_locker)
    (:requirements :strips)
    (:predicates
        (door_locker ?obj)
        (deactivate ?obj)
        (lock_check_status ?obj)
        (activate ?obj)
        (unlock_check_status ?obj)
        (security_system ?system)              
    )
    
        (:action LockDoors
            :parameters (?obj)
            :precondition (and
                (door_locker ?obj)
                (deactivate ?obj)
                (lock_check_status ?obj)
            )
            :effect (and
                (activate ?obj)
            )
        )
        
        (:action UnlockDoors
            :parameters (?obj)
            :precondition (and
                (door_locker ?obj)
                (activate ?obj)
                (unlock_check_status ?obj)
            )
            :effect (and
                (deactivate ?obj)
            )
        )
        
        (:action LockCheckStatus
            :parameters (?obj ?system)
            :precondition (and
                (door_locker ?obj)
                (security_system ?system)
                (deactivate ?obj)
            )
            :effect (and
                (lock_check_status ?obj)
            )
        )
        
        (:action UnlockCheckStatus
            :parameters (?obj ?system)
            :precondition (and
                (door_locker ?obj)
                (security_system ?system)
                (activate ?obj)
            )
            :effect (and
                (unlock_check_status ?obj)
            )
        )
)