using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PeopleCarsReact.Data;

namespace PeopleCarsReact.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : Controller
    {
        private string _connectionString;
        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [Route("getAll")]
        public List<Person> GetPeople()
        {
            var pr = new PeopleRepository(_connectionString);
            return pr.GetPeople();

        }
        [HttpPost]
        [Route("AddPerson")]
        public void AddPerson(Person person)
        {
            var pr = new PeopleRepository(_connectionString);
            pr.AddPerson(person);

        }
        [HttpPost]
        [Route("DeleteCars")]
        public void DeleteCars(Person p)
        {
            var pr = new PeopleRepository(_connectionString);
            pr.DeleteCars(p.Id);

        }
        [HttpPost]
        [Route("AddCar")]
        public void AddCar(Car car)
        {
            int id = car.Id;
            car.PersonId = id;
            car.Id = 0;
            var pr = new PeopleRepository(_connectionString);
            pr.AddCar(car);

        }
        [Route("GetPersonById")]
        public Person GetPersonById(int id)
        {
            var pr = new PeopleRepository(_connectionString);
            Person p = pr.PersonById(id);
            return p;
        }
    }
}



