;; problem file: problem-doors_locker.pddl
(define (problem doors_locker)
    (:domain doors_locker)
    (:objects house_door_lockers house_security_system)
	(:init (door_locker house_door_lockers) (security_system house_security_system) (lock_check_status house_door_lockers) (activate house_door_lockers))
	(:goal (and (deactivate house_door_lockers)))
)
