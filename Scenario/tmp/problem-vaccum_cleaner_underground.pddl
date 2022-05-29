;; problem file: problem-vaccum_cleaner_underground.pddl
(define (problem vaccum_cleaner_underground)
    (:domain vaccum_cleaner_underground)
    (:objects garage laudry billiard_room hallway_underground landing_underground off on vaccum_cleaner_underground)
	(:init (room garage) (room laudry) (room billiard_room) (room hallway_underground) (room landing_underground) (room1 garage) (room2 laudry) (room3 billiard_room) (room4 hallway_underground) (room5 landing_underground) (state off) (state on) (vaccum vaccum_cleaner_underground) (adj garage hallway_underground) (adj laudry hallway_underground) (adj billiard_room hallway_underground) (adj landing_underground hallway_underground) (adj hallway_underground garage) (adj hallway_underground billiard_room) (adj hallway_underground hallway_underground) (adj hallway_underground laudry) (adj hallway_underground landing_underground) (in_room vaccum_cleaner_underground garage) (switched_off vaccum_cleaner_underground) (in_base vaccum_cleaner_underground))
	(:goal (and (clean_underground_floor vaccum_cleaner_underground)))
)
