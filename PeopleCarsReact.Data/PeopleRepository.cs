using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PeopleCarsReact.Data
{
    public class PeopleRepository
    {
        string _connectionString;
        public PeopleRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Person> GetPeople()
        {
            using (var context = new PeopleContext(_connectionString))
            {
                return context.People.Include(c=>c.Cars).ToList();
            }
        }
        public void AddPerson(Person p)
        {
            using (var context = new PeopleContext(_connectionString))
            {
                context.People.Add(p);
                context.SaveChanges();
            }
        }
        public void DeleteCars(int id)
        {
            using (var context = new PeopleContext(_connectionString))
            {
                List<Car> cars = context.Cars.Where(c => c.PersonId == id).ToList();
                context.Cars.RemoveRange(cars);
                context.SaveChanges();
            }
        }
        public void AddCar(Car car)
        {
            using (var context = new PeopleContext(_connectionString))
            {
                context.Cars.Add(car);
                context.SaveChanges();
            }
        }
        public Person PersonById(int id)
        {
            using (var context = new PeopleContext(_connectionString))
            {
                return context.People.FirstOrDefault(p => p.Id == id);
            }
        }
    }
}
