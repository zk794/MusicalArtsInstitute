import React, { Component } from "react";
import { Container, Header, Grid, Button, Modal } from "semantic-ui-react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

class StudentPage extends Component {
  state = {eventData : {}, open : false}
  handleDateSelect(e) {
    var startd = new Date(e.start)
    var endd = new Date(e.end)
    const data = {
      start: startd,
      end: endd,
    };
    this.setState({eventData : data, open : true})
    console.log(data)
    console.log(e);
  }
  handleDateSubmit() {
    let data = {
      start : this.state.eventData.start.getTime() / 1000,
      end: this.state.eventData.end.getTime() / 1000
    }
    this.props.addEvent(data);
    this.setState({eventData = {}, open = false})
  }
  render() {
    return (
      <Container>
        <Header textAlign="center" as="h1">
          Student Page
        </Header>
        <Grid>
          <Grid.Row>
            <Header as="h2">Hello {this.props.name} !</Header>
          </Grid.Row>
          <Grid.Row>
            <Button primary onClick={this.props.onLogoutClick}>
              Log Out
            </Button>
          </Grid.Row>
          <Grid.Row>
            <Header as="h3">
              You can view your schedule here and make changes:
            </Header>
          </Grid.Row>
        </Grid>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="timeGridWeek"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={this.handleDateSelect}
          // eventContent={renderEventContent} // custom render function
          eventClick={this.handleEventClick}
          eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
        />
        <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={this.state.open}
      
    >
      <Modal.Header>Please confirm your date</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header></Header>
          <p>
            This is the time that you have selected:
            start is {this.state.eventData.start}
            end is {this.state.eventData.end}
          </p>
          <p>Is this the time you want?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => this.setState({open:false})}>
          No
        </Button>
        <Button
          content="Yes"
          labelPosition='right'
          onClick={this.handleDateSubmit}
          positive
        />
      </Modal.Actions>
    </Modal>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { addEvent })(StudentPage);
