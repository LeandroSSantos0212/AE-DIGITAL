const taskModel = require('../model/TaskModel');

const {
    startOfToday,
    endOfToday,
    startOfWeek,
    endOfWeek,
    startOfMonth,
    endOfMonth, startOfYear, endOfYear } = require('date-fns');

const current = new Date();

class TaskController {

    async create(req, res) {

        const task = new taskModel(req.body);
        await task.save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(err => {
                return res.status(500).json(err);
            });

    }

    async update(req, res) {

        await taskModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { next: true })
            .then(response => {

                return res.status(200).json(response);
            }).catch(err => {
                return res.status(500).json(err);
            });

    }


    async allTasks(req, res) {

        await taskModel.find({ macaddress: { '$in': req.params.macaddress } })
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            }).catch(err => {
                return res.status(500).json(err);
            })

    }

    async ShowUniqueTask(req, res) {
        await taskModel.findById(req.params.id)
            .then(response => {
                if (response)
                    return res.status(200).json(response);
                else
                    return res.status(404).json({ errors: [{ message: 'The task is not found' }] });
            })
            .catch(err => {
                return res.status(500).json(err);
            })
    }

    async delete(req, res) {
        await taskModel.deleteOne({ '_id': req.params.id })
            .then(response => {
                return res.status(200).json(response);

            })
            .catch(err => {
                return res.status(500).json(err);
            })
    }

    async done(req, res) {
        await taskModel.findByIdAndUpdate(
            { '_id': req.params.id },
            { 'done': req.params.done },
            { new: true })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(err => {
                return res.status(500).json(err);
            });
    }

    async lateTask(req, res) {
        await taskModel.find({
            'when': { '$lt': current },
            'macaddress': { '$in': req.params.macaddress }
        }).sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(err => {
                return res.status(500).json(err);
            });

    }

    async todayTask(req, res) {
        await taskModel.find({

            'macaddress': { '$in': req.params.macaddress },
            'when': { '$gte': startOfToday(current), '$lte': endOfToday(current) },
        }).sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(err => {
                return res.status(500).json(err);
            });
    }


    async weekTask(req, res) {
        await taskModel.find({

            'macaddress': { '$in': req.params.macaddress },
            'when': { '$gte': startOfWeek(current), '$lte': endOfWeek(current) },
        }).sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(err => {
                return res.status(500).json(err);
            });
    }


    async monthTask(req, res) {
        await taskModel.find({

            'macaddress': { '$in': req.params.macaddress },
            'when': { '$gte': startOfMonth(current), '$lte': endOfMonth(current) },
        }).sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(err => {
                return res.status(500).json(err);
            });
    }

    async yearTask(req, res) {
        await taskModel.find({

            'macaddress': { '$in': req.params.macaddress },
            'when': { '$gte': startOfYear(current), '$lte': endOfYear(current) },
        }).sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(err => {
                return res.status(500).json(err);
            });
    }
}

module.exports = new TaskController();